import Link from "next/link"
import { UserAuthForm } from "@/components/auth/user-auth-form"
import { Logo } from "@/components/logo"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function SignInPage() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
            <Logo />
        </div>
        <CardTitle className="text-2xl">Welcome to Stellary</CardTitle>
        <CardDescription>
          Enter your email or use a provider to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <UserAuthForm />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-sm">
        <p className="text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
         <Link
            href="/"
            className="underline underline-offset-4 hover:text-primary text-muted-foreground"
          >
            Back to Home
          </Link>
      </CardFooter>
    </Card>
  )
}
