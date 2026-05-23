import { useId } from "react";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type FormFieldProps = {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  children: React.ReactElement<{ id?: string; "aria-describedby"?: string; "aria-invalid"?: boolean }>;
};

export function FormField({
  label,
  helper,
  error,
  required = false,
  htmlFor,
  className,
  children,
}: FormFieldProps) {
  const autoId = useId();
  const fieldId = htmlFor ?? children.props.id ?? autoId;
  const helperId = helper ? `${fieldId}-helper` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;

  const child = {
    ...children,
    props: {
      ...children.props,
      id: fieldId,
      "aria-describedby": [helperId, errorId].filter(Boolean).join(" ") || undefined,
      "aria-invalid": error ? true : children.props["aria-invalid"],
    },
  } as React.ReactElement;

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label htmlFor={fieldId} className="block">
          <Text as="span" size="sm" weight="medium">
            {label}
            {required && <span className="ml-0.5 text-error">*</span>}
          </Text>
        </label>
      )}
      {child}
      {helper && !error && (
        <Text id={helperId} as="span" size="xs" color="muted">
          {helper}
        </Text>
      )}
      {error && (
        <Text id={errorId} as="span" size="xs" color="error">
          {error}
        </Text>
      )}
    </div>
  );
}
