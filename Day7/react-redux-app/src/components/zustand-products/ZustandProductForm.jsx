import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useProductsStore from '../../store/zustand/productsStore';

const ZustandProductForm = ({ editProduct, onCancel, onSuccess, onError }) => {
    const { insertProduct, updateProduct } = useProductsStore();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            pname: '',
            price: '',
            stock: ''
        }
    });

    useEffect(() => {
        if (editProduct) {
            reset({
                pname: editProduct.pname || '',
                price: editProduct.price || '',
                stock: editProduct.stock || ''
            });
        } else {
            reset({
                pname: '',
                price: '',
                stock: ''
            });
        }
    }, [editProduct, reset]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const product = {
                pname: data.pname,
                price: Number(data.price),
                stock: Number(data.stock)
            };

            if (editProduct) {
                await updateProduct({ ...product, id: editProduct.id });
                reset();
                onSuccess('Product updated successfully', true);
            } else {
                await insertProduct(product);
                reset();
                onSuccess('Product added successfully', false);
            }
        } catch (err) {
            if (onError) {
                onError(err.message || 'An error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5 className="mb-0">
                    {editProduct ? 'Edit Product' : 'Add New Product'}
                </h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="pname" className="form-label">Product Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.pname ? 'is-invalid' : ''}`}
                            id="pname"
                            {...register('pname', { required: 'Product name is required' })}
                        />
                        {errors.pname && (
                            <div className="invalid-feedback">{errors.pname.message}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                            id="price"
                            {...register('price', {
                                required: 'Price is required',
                                min: { value: 0, message: 'Price must be positive' }
                            })}
                        />
                        {errors.price && (
                            <div className="invalid-feedback">{errors.price.message}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input
                            type="number"
                            className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                            id="stock"
                            {...register('stock', {
                                required: 'Stock is required',
                                min: { value: 0, message: 'Stock must be positive' }
                            })}
                        />
                        {errors.stock && (
                            <div className="invalid-feedback">{errors.stock.message}</div>
                        )}
                    </div>

                    <div className="d-flex gap-2">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" />
                                    Saving...
                                </>
                            ) : (
                                editProduct ? 'Update Product' : 'Add Product'
                            )}
                        </button>
                        {editProduct && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ZustandProductForm;
