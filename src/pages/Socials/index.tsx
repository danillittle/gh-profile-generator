import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import useStore from "@/useStore";
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

const socialsSchema = z.object({
  github: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
  instagram: z.string(),
  facebook: z.string(),
  youtube: z.string(),
});

export type SocialsFormType = z.infer<typeof socialsSchema>;

const Socials: React.FC = () => {
  const { socials, setSocials } = useStore();
  const form = useForm({
    resolver: zodResolver(socialsSchema),
    defaultValues: socials,
  });

  const onSubmit = (values: SocialsFormType) => {
    setSocials(values);
  };

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-semibold tracking-tight">Socials</h2>
        <p className="text-muted-foreground">
          Connect with your visitors by adding links to your socials.
        </p>
      </div>
      <Separator className="my-6" />
      <Form {...form}>
        <form onChange={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Github profile:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://github.com/"
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
            name="linkedin"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Linkedin profile:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://linkedin.com/in/"
                    placeholder="yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Twitter profile:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://twitter.com/"
                    placeholder="yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Instagram profile:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://instagram.com/"
                    placeholder="yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Facebook profile:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://facebook.com/"
                    placeholder="yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="youtube"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Youtube channel:</FormLabel>
                <FormControl>
                  <Input
                    prefix="https://youtube.com/"
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
        <Link to="/skills">
          <Button type="button" variant="outline">
            Previous section
          </Button>
        </Link>
        <Link to="/support">
          <Button type="button" variant="outline">
            Next section
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Socials;
