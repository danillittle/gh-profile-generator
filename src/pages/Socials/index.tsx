import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import useStore from "@/useStore";
import { NavLinkEnum, ServiceLinkEnum } from "@/types/enum";
import SimpleIcon from "@/components/ui/simpleicon";
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="github" size={16} />
                  Github profile:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.github}
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="linkedin" size={16} />
                  Linkedin profile:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.linkedin}
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="twitter" size={16} />
                  Twitter profile:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.twitter}
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="instagram" size={16} />
                  Instagram profile:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.instagram}
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="facebook" size={16} />
                  Facebook profile:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.facebook}
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
                <FormLabel className="flex items-center gap-1">
                  <SimpleIcon name="youtube" size={16} />
                  Youtube channel:
                </FormLabel>
                <FormControl>
                  <Input
                    prefix={ServiceLinkEnum.youtube}
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
        <Link to={NavLinkEnum.skills}>
          <Button type="button" variant="outline">
            <ChevronLeftIcon className="mr-2" /> Previous section
          </Button>
        </Link>
        <Link to={NavLinkEnum.support}>
          <Button type="button" variant="outline">
            Next section <ChevronRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Socials;
