
export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
  <>
  <h3>Layout de categoria</h3>
  {children}
  </>
)
}