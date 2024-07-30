interface Props {
  params :{
    category: string,
    searchParams?:{
      medidas: string
    }
  }
}
export default function Category(props: Props){
  console.log(props)
  return <h1>Path: {props.params.category}</h1>
}