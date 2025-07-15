import Editor from '@/components/Editor'
import MDX from '@/components/MDX'
import SideNav from '@/components/SideNav'

export default function NotesPage() {
  const isViewer = false

  return (
    <>
      <main id="notes">
        <SideNav />
        {!isViewer && <Editor hello="world" isViewer={isViewer} />}
        {isViewer && <MDX />}
      </main>
    </>
  )
}
