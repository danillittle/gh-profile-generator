import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import useStore from "@/useStore";
import { NavLinkEnum, ServiceLinkEnum } from "@/types/enum";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SimpleIcon from "@/components/ui/simpleicon";

const supportSchema = z.object({
  buyMeACoffee: z.string(),
  kofi: z.string(),
});

export type SupportFormType = z.infer<typeof supportSchema>;

const Support: React.FC = () => {
  const { support, setSupport } = useStore();
  const form = useForm({
    resolver: zodResolver(supportSchema),
    defaultValues: support,
  });

  const onSubmit = (values: SupportFormType) => {
    setSupport(values);
  };

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-semibold tracking-tight">Support</h2>
        <p className="text-muted-foreground">
          Connect with your visitors by adding links to your support.
        </p>
      </div>
      <Separator className="my-6" />
      <Form {...form}>
        <form onChange={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="buyMeACoffee"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="flex items-center">
                  <SimpleIcon name="buymeacoffee" size={16} className="mr-1" />
                  Buy me a coffee:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.buyMeACoffee}
                    placeholder="yourname"
                    autoFocus
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kofi"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="flex items-center">
                  <SimpleIcon name="kofi" size={16} className="mr-1" />
                  Buy me a coffee:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.kofi}
                    placeholder="yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-between mt-8">
        <Link to={NavLinkEnum.socials}>
          <Button type="button" variant="outline">
            <ChevronLeftIcon className="mr-2" /> Previous section
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Support;
