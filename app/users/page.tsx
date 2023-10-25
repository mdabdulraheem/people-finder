import { Button } from '@/components/ui/button'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { getAllUsers } from '../api/user'

type Props = {
    search: string
}

const Users = async (props: Props) => {
    const users = await getAllUsers(props.search)
    return (
        <div className="pt-5 w-full  max-w-4xl">
            {users.length > 0 ? (
                users.map((user, index) => {
                    return (
                        <Card
                            className="flex flex-wrap justify-between align-middle mb-2"
                            key={index}
                        >
                            <CardHeader className="flex gap-2 flex-row p-4">
                                <Avatar>
                                    <AvatarFallback>
                                        {user.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <CardTitle>{user.name}</CardTitle>
                                    <CardDescription>
                                        {user.email}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardFooter className="p-4">
                                <Link href={`/users/${user.id}`}>
                                    <Button>View Details</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Nothing Found</h1>
                    <h4>You searched for &quot;{props.search}&quot;</h4>
                </div>
            )}
        </div>
    )
}

export default Users
