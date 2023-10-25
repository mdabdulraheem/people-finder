import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { getUserDetails } from '@/app/api/user'

type Props = {
    params: {
        id: number
    }
}

export async function generateMetadata(props: Props) {
    return {
        title: 'User Details',
    }
}

const User = async (props: Props) => {
    const userDetails = await getUserDetails(props.params.id)
    return (
        <>
            <div className="w-full max-w-xl">
                <Link
                    href="/"
                    className="inline-flex hover:underline text-blue-600 gap-1 justify-center items-center"
                >
                    <ArrowLeftIcon />
                    <span>Go Back</span>
                </Link>
            </div>

            <Avatar className="w-40 h-40 my-5">
                <AvatarFallback className="text-6xl">
                    {userDetails.name?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>

            <h2 className="pb-5 text-2xl italic text-slate-800 font-bold drop-shadow-lg">
                {userDetails.name}
            </h2>

            <Card className="w-full  max-w-xl">
                <CardContent className="pt-6">
                    <Table>
                        <TableBody>
                            {Object.entries(userDetails).map(([key, value]) => {
                                const show =
                                    typeof value === 'object' ? false : value;
                                return (
                                    <>
                                        {show && (
                                            <TableRow>
                                                <TableCell className="font-medium">
                                                    {key.toUpperCase()}
                                                </TableCell>
                                                <TableCell>{show}</TableCell>
                                            </TableRow>
                                        )}
                                    </>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}

export default User
