import { LoginForm } from '@/app/ui/login-form';
import { Search } from '@/app/ui/search';

export default function Home() {
  return (
    <div className="h-screen bg-gray-300 p-5">
      <Search placeholder="search" />
      <LoginForm />
    </div>
  );
}
