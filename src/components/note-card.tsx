export function NoteCard() {
  return (
    <button
      className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative 
    outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eos
        quo distinctio, veniam corrupti totam impedit delectus quasi ducimus
        eligendi quidem expedita accusantium eum modi numquam in officiis
        aspernatur magni. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Modi quae magnam, veniam ut nihil eius exercitationem, delectus
        laborum illum id quaerat? Quibusdam quod voluptas natus quos velit,
        voluptatum recusandae? Commodi?
      </p>

      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t 
            from-black/60 to-black/0 pointer-events-none"
      />
    </button>
  );
}
