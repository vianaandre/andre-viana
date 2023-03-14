export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
}

export type useInputProps = {
    focus: boolean;
    onFocus: () => void;
    onBlur: () => void;
}
