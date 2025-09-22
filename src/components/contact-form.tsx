import { Label } from '~/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';

export const ContactForm: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl">Get In Touch</CardTitle>
    </CardHeader>
    <CardContent className="h-full">
      <form className="flex h-full flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="first-name" className="text-base">
                First Name: <span className="text-red-500">*</span>
              </Label>
              <Input id="first-name" name="first-name" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="last-name" className="text-base">
                Last Name: <span className="text-red-500">*</span>
              </Label>
              <Input id="last-name" name="last-name" type="text" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-base">
              Email: <span className="text-red-500">*</span>
            </Label>
            <Input id="email" name="email" type="text" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-base">
              Phone Number:
            </Label>
            <Input id="phone" name="phone" type="text" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-base">
              Message: <span className="text-red-500">*</span>
            </Label>
            <Textarea id="message" className="min-h-40" name="message" />
          </div>
        </div>

        <Button className="w-fit px-8">Submit</Button>
      </form>
    </CardContent>
  </Card>
);
