interface PropDef {
  name: string;
  type: string;
  required?: boolean;
  description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="overflow-x-auto border border-border rounded-radius-md">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-border">
          <tr className="text-left">
            <th className="px-4 py-2.5 font-medium text-charcoal w-[180px]">Prop</th>
            <th className="px-4 py-2.5 font-medium text-charcoal">Type</th>
            <th className="px-4 py-2.5 font-medium text-charcoal">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-b border-border last:border-b-0 align-top">
              <td className="px-4 py-3 font-mono text-charcoal">
                {p.name}
                {p.required && <span className="text-accent ml-0.5">*</span>}
              </td>
              <td className="px-4 py-3 font-mono text-charcoal-light text-xs">
                {p.type}
              </td>
              <td className="px-4 py-3 text-charcoal-light leading-relaxed">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
