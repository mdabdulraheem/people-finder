'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    searchQuery: z.string().max(20),
})

type Props = {
    params: {
        name: string
    }
}

const SearchForm = (props: Props) => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchQuery: props.params?.name || '',
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (values.searchQuery.length === 0) {
            router.push('/')
        } else {
            router.push(`/?name=${values.searchQuery}`)
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-center py-5"
            >
                <FormField
                    control={form.control}
                    name="searchQuery"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Search"
                                    {...field}
                                    className="bg-white"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Search</Button>
            </form>
        </Form>
    )
}

export default SearchForm
