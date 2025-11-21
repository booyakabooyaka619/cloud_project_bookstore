/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookOrderCreateFormInputValues = {};
export declare type BookOrderCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookOrderCreateFormOverridesProps = {
    BookOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BookOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: BookOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookOrderCreateFormInputValues) => BookOrderCreateFormInputValues;
    onSuccess?: (fields: BookOrderCreateFormInputValues) => void;
    onError?: (fields: BookOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookOrderCreateFormInputValues) => BookOrderCreateFormInputValues;
    onValidate?: BookOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookOrderCreateForm(props: BookOrderCreateFormProps): React.ReactElement;
