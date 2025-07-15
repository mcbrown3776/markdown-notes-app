import TopNav from './TopNav'

export default function Editor(props) {
  return (
    <section className="notes-container">
      <TopNav {...props} />
      <textarea placeholder="The mitochondria is the powerhouse of the cell" />
    </section>
  )
}
