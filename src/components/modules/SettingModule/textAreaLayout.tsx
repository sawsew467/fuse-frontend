import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaLayoutProps {
    label?: string;
    backgroundColor?: string;
    className?: string;
}

function TextAreaLayout({
    className,
    label,
    backgroundColor,
}: TextAreaLayoutProps) {
    return (
        <section
            className={cn(
                "",
                className,
            )}
            style={{
                backgroundColor,
            }}
        >
            <div className="flex flex-col gap-2">
                {label && (
                    <h3 className="text-sm font-semibold">
                        {label}
                    </h3>
                )}
                    <Textarea className="bg-transparent"/>
            </div>
        </section>
    );
}

export default TextAreaLayout;
