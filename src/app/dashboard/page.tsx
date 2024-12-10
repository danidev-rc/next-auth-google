import { FormPage } from '@/app/Form/page'

function DashboardPage() {
  return (
    <div className="grid justify-center">
      <h1>DashboardPage</h1>
      <div className="my-4 flex h-screen items-center justify-center">
        <FormPage />
      </div>
    </div>
  )
}

export default DashboardPage
