import Users from './users/page'
import SearchForm from './components/SearchForm'

export default function Home({ searchParams }: any) {
    return (
        <>
            <SearchForm params={searchParams} />
            <Users search={searchParams.name} />
        </>
    )
}
