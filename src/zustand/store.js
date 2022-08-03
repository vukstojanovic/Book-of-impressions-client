import create from 'zustand'

const useFormStore = create((set) => ({
  formData: { formId: '', name: '', email: '', contactMe: false },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  setRating: (number) => set((state) => ({ formData: { ...state.formData, rating: number } })),
  setRatings: (index, number) =>
    set((state) => {
      const ratingsCopy = state.formData.ratings
      ratingsCopy[index] = number
      return { formData: { ...state.formData, ratings: ratingsCopy } }
    }),
  resetFormData: () =>
    set(() => ({ formData: { formId: '', name: '', email: '', contactMe: false } })),
  isLoading: false,
  isSuccess: false,
  setIsLoading: (data) => set(() => ({ isLoading: data })),
  setIsSuccess: (data) => set(() => ({ isSuccess: data })),
}))

export { useFormStore }