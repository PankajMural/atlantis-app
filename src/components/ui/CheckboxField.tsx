interface CheckboxFieldProps {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export default function CheckboxField({ label, checked = false, onChange }: CheckboxFieldProps) {
  return (
    <label className="flex items-center gap-3 h-checkbox cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 rounded-sm border border-border-default accent-atlantis-blue-600"
      />
      <span className="text-sm text-text-primary">{label}</span>
    </label>
  )
}
