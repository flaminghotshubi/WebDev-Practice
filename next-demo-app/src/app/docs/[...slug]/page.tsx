export default function Docs({params}:{
    params : {
        slug:string[]
    }
}) {
    if(params.slug.length === 2) {
        return <h1>Page for {params.slug[0]} with {params.slug[1]} examples</h1>
    } else if(params.slug.length===1) {
        return <h1>Page for {params.slug[0]}</h1>
    } else {
        return <h1>Docs home page</h1>
    }
}