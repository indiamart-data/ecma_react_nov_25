import { useState } from 'react';
import ZustandProductForm from './ZustandProductForm';
import ZustandProductList from './ZustandProductList';
import ToastNotification from '../common/ToastNotification';
import useProductsStore from '../../store/zustand/productsStore';

const ZustandProductsComponent = () => {
    const { fetchProducts } = useProductsStore();
    const [editProduct, setEditProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

    const handleEdit = (product) => {
        setEditProduct(product);
        setShowForm(true);
    };

    const handleCancel = () => {
        setEditProduct(null);
        setShowForm(false);
    };

    const handleSuccess = (message, isEdit = false) => {
        setEditProduct(null);
        setShowForm(false);
        setToast({
            show: true,
            message: message || (isEdit ? 'Product updated successfully' : 'Product added successfully'),
            type: 'success'
        });
    };

    const handleDeleteSuccess = () => {
        setToast({
            show: true,
            message: 'Product deleted successfully',
            type: 'success'
        });
    };

    const handleError = (message) => {
        setToast({
            show: true,
            message: message || 'An error occurred',
            type: 'danger'
        });
    };

    const handleRefresh = async () => {
        try {
            await fetchProducts();
            setToast({
                show: true,
                message: 'Products refreshed successfully',
                type: 'success'
            });
        } catch (error) {
            setToast({
                show: true,
                message: `Failed to refresh: ${error.message || error}`,
                type: 'danger'
            });
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Zustand Products Demo</h2>
                {!showForm && (
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-success"
                            onClick={() => setShowForm(true)}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Add Product
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={handleRefresh}
                        >
                            <i className="bi bi-arrow-clockwise me-2"></i>
                            Refresh
                        </button>
                    </div>
                )}
            </div>

            <div className="alert alert-info mb-4">
                <strong>Note:</strong> This demo uses Zustand for state management instead of Redux.
                Zustand provides a simpler, more lightweight alternative with less boilerplate.
            </div>

            {showForm && (
                <ZustandProductForm
                    editProduct={editProduct}
                    onCancel={handleCancel}
                    onSuccess={handleSuccess}
                    onError={handleError}
                />
            )}

            <ZustandProductList onEdit={handleEdit} onDeleteSuccess={handleDeleteSuccess} onError={handleError} onRefresh={handleRefresh} />

            <ToastNotification
                show={toast.show}
                onClose={() => setToast({ ...toast, show: false })}
                message={toast.message}
                type={toast.type}
            />
        </div>
    );
};

export default ZustandProductsComponent;
