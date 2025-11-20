import { create } from 'zustand';
import productsAPIClient from '../../services/products-api-client';

const useProductsStore = create((set, get) => ({
    // State
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed' - only for fetch operations
    error: null,    // Only stores fetch errors (read operations)

    // Fetch Products - Store errors in state (affects global UI)
    fetchProducts: async () => {
        set({ status: 'loading', error: null });
        try {
            const products = await productsAPIClient.getAllProducts();
            set({ items: products, status: 'succeeded', error: null });
        } catch (error) {
            set({ status: 'failed', error: error.message || 'An error occurred' });
        }
    },

    // Insert Product - Handle errors at component level via try/catch
    insertProduct: async (product) => {
        try {
            const newProduct = await productsAPIClient.insertProduct(product);
            set((state) => ({
                items: [...state.items, newProduct]
            }));
            return newProduct;
        } catch (error) {
            // Re-throw error to be caught at component level
            throw error;
        }
    },

    // Update Product - Handle errors at component level via try/catch
    updateProduct: async (product) => {
        try {
            const updatedProduct = await productsAPIClient.updateProduct(product);
            set((state) => ({
                items: state.items.map((item) =>
                    item.id === updatedProduct.id ? updatedProduct : item
                )
            }));
            return updatedProduct;
        } catch (error) {
            // Re-throw error to be caught at component level
            throw error;
        }
    },

    // Delete Product - Handle errors at component level via try/catch
    deleteProduct: async (productId) => {
        try {
            await productsAPIClient.deleteProduct({ id: productId });
            set((state) => ({
                items: state.items.filter((item) => item.id !== productId)
            }));
        } catch (error) {
            // Re-throw error to be caught at component level
            throw error;
        }
    },

    // Clear fetch error
    clearError: () => set({ error: null, status: 'idle' })
}));

export default useProductsStore;
