import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import useStore from "@/useStore";
import { NavLinkEnum } from "@/types/enum";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const introductionSchema = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  portfolioTitle: z.string(),
  portfolioLink: z.union([z.string().url(), z.literal("")]),
  emailMe: z.union([z.string().email(), z.literal("")]),
  workingOnTitle: z.string(),
  workingOnLink: z.union([z.string().url(), z.literal("")]),
  learning: z.string(),
  collaborateOn: z.string(),
  additionalInfo: z.string(),
});

export type IntroductionFormType = z.infer<typeof introductionSchema>;

const Introduction: React.FC = () => {
  const { introduction, setIntroduction } = useStore();
  const form = useForm({
    resolver: zodResolver(introductionSchema),
    defaultValues: introduction,
  });

  const onSubmit = (values: IntroductionFormType) => {
    setIntroduction(values);
  };

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
        <p className="text-muted-foreground">
          Introduce yourself. Tell visitors about you and who you are.
        </p>
      </div>
      <Separator className="my-6" />
      <Form {...form}>
        <form onChange={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>👋 Hi! My name is:</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" autoFocus {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>✏️ Description:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="eg: I've been learning to code for 5 years, after switching careers. I started with HTML, but have really found a passion for backend development..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>🌍 I'm based in:</FormLabel>
                <FormControl>
                  <Input placeholder="Hanoi, Vietnam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioTitle"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>🖥️ See my portfolio:</FormLabel>
                <FormControl>
                  <Input placeholder="my portfolio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioLink"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://myapp.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailMe"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>📫 Contact me at:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="myemail@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workingOnTitle"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>🧑‍💻 I'm currently working on:</FormLabel>
                <FormControl>
                  <Input placeholder="Apple Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workingOnLink"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://apple.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="learning"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>🧠 I'm currently learning:</FormLabel>
                <FormControl>
                  <Input placeholder="a new framework" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="collaborateOn"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>🤝 I'm open to collaborating on:</FormLabel>
                <FormControl>
                  <Input placeholder="interesting projects" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>⚡ Anything else:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="I'm secretly Spiderman... but don't tell anyone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-end mt-8">
        <Link to={NavLinkEnum.skills}>
          <Button type="button" variant="outline">
            Next section <ChevronRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Introduction;
