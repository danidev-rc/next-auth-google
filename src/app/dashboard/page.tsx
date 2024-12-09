import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function DashboardPage() {
  return (
    <div className="grid justify-center">
      <h1>DashboardPage</h1>
      <div className="my-4 flex justify-center">
        <Button>Click me</Button>
        <Input type="email" placeholder="Email" />
      </div>
    </div>
  )
}

export default DashboardPage
