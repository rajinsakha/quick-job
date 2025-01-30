import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LockIcon, UserPlus } from "lucide-react"

export default function LoginPrompt() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[90vh] bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <LockIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">Login Required</h2>
        <p className="text-gray-600 mb-6">
          Please log in to create a new posting or sign up if you don&apos;t have an account.
        </p>
        <div className="space-y-4">
          <Button size="lg" className="w-full" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="/sign-up">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </div>
        {/* <div className="mt-8">
          <Separator className="my-4" />
          <p className="text-sm text-gray-500 mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" aria-label="Login with GitHub">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Login with Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div> */}
      </motion.div>
      <motion.p
        className="mt-8 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        By logging in, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-primary">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-primary">
          Privacy Policy
        </Link>
        .
      </motion.p>
    </motion.div>
  )
}

