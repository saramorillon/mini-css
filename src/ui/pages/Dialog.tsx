import { useRef } from 'react'

export function Dialog() {
  const ref = useRef<HTMLDialogElement>(null)

  return (
    <section>
      <h2>Dialog</h2>
      <button onClick={() => ref.current?.showModal()}>Open dialog</button>
      <dialog ref={ref}>
        <header>
          <h1>Dialog header</h1>
          <button onClick={() => ref.current?.close()}>✖</button>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare purus lorem, vel finibus diam
          tincidunt sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Aenean aliquet odio et dolor aliquam bibendum. Sed eget vestibulum enim, vel tincidunt ligula. Aliquam sit
          amet dapibus sem. Ut orci justo, eleifend vel consectetur quis, sodales sit amet urna. Maecenas suscipit
          mattis diam at blandit. Cras non urna ligula. Donec ut porta dui, ut lobortis mi. Vestibulum aliquet elit at
          quam scelerisque, ut iaculis ligula vestibulum. Nullam elementum mi sem, et sodales felis laoreet sit amet.
          Sed sed porttitor nunc. Fusce ac lacus ut turpis dictum scelerisque ut non erat.
        </p>
        <footer>
          <button onClick={() => ref.current?.close()}>Close</button>
          <button onClick={() => ref.current?.close()}>Confirm</button>
        </footer>
      </dialog>
    </section>
  )
}
