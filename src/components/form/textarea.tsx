import type { Control, FieldPath, FieldValues, PathValue } from 'react-hook-form';

import { Controller } from 'react-hook-form';

import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field';
import { Textarea } from '~/components/ui/textarea';

type FormTextareaProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  control: Control<TFieldValues>;
  name: TName;

  className?: string;
  disabled?: boolean;
  label: string;
  placeholder?: string;
  required?: boolean;
} & (PathValue<TFieldValues, TName> extends TextareaValue
  ? {} // eslint-disable-line @typescript-eslint/no-empty-object-type
  : { _error: 'Field value must match input value type' });

type TextareaValue = null | React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];

export function FormTextarea<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  className,
  control,
  disabled,
  label,
  name,
  placeholder,
  required,
}: FormTextareaProps<TFieldValues, TName>) {
  return (
    <FieldGroup>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
              <FieldLabel htmlFor={name}>
                {label} {required && <span className="text-red-500">*</span>}
              </FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </div>

            <Textarea
              {...field}
              aria-invalid={fieldState.invalid}
              className={className}
              disabled={disabled}
              id={name}
              placeholder={placeholder}
              value={field.value ?? ''}
            />
          </Field>
        )}
      />
    </FieldGroup>
  );
}
