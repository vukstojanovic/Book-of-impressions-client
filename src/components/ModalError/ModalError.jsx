import { useModalStore } from '@/stores/modal'

export const ModalError = () => {
  const setIsModalOpen = useModalStore((state) => state.setIsModalOpen)

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur z-[101]"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="fixed flex flex-col justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-header text-white p-8 rounded-lg z-[102] w-10/12 max-w-md">
        <h3 className="text-base mb-6">
          You have already submitted this type of form, please try again in 1 hour!
        </h3>
        <button
          className="rounded-md bg-boiOrange py-2 px-3 max-w-[175px]"
          onClick={() => setIsModalOpen(false)}
        >
          Ok, go back!
        </button>
      </div>
    </>
  )
}
