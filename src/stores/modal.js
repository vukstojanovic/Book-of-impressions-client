import create from 'zustand'

const useModalStore = create((set) => ({
  isModalOpen: false,
  setIsModalOpen: (data) => set(() => ({ isModalOpen: data })),
}))

export { useModalStore }
