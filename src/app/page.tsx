"use client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"

export default function Home() {
  const form = useForm()

  return (
    // <main className="p-8 max-w-6xl mx-auto">
    <main className="min-h-screen mx-auto items-center p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shadcn UI Components Demo</CardTitle>
          <CardDescription>A showcase of various shadcn-ui components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Basic Components Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Basic Components</h2>
              <div className="flex gap-4 items-center">
                <Button variant="default">Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex gap-4 item-center">
                <Input placeholder="Input something ......" className="max-sw-m" />
                <Badge>New</Badge>
                <Badge variant={"secondary"}>Alternative</Badge>
              </div>
            </section>
            {/* Avatar Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Avatars</h2>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
              </div>
            </section>
            {/* Tabs Section */}
            <section className="space-y-4">
              <h2 className="text-2xl fond-bold">Tabs</h2>
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">password</TabsTrigger>
                  <TabsTrigger value="settings">settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Input placeholder="Email" className="max-w-sm" />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password:</CardTitle>
                      <CardDescription>Change Your Password</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(() => { })}>
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input className="max-w-sm" type="password" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </form>
                      </Form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Deploy</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <div className="flex space-x-2">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </CardContent>
      </Card>

    </main>
  )
}
