'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { setAuthCookie } from '@/utils/actions';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="just click sign in button"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="just click sign in button"
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            //This would be in your hook
            const accessTokenFromAPI =
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNzU2NDk3MDQ2fQ.o8FvNku65JW3lDIyZvKie6zoYeOZYfagMwF0caA9Q_E';
            setAuthCookie(accessTokenFromAPI);
            router.push('/dashboard');
          }}
          className="w-full"
        >
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
