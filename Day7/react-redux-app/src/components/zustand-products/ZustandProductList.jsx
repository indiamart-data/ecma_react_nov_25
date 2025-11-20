import { useEffect } from 'react';
import useProductsStore from '../../store/zustand/productsStore';
import DataTable from '../common/DataTable';
import LoaderAnimation from '../common/LoaderAnimation';

const ZustandProductList = ({ onEdit, onDeleteSuccess, onError, onRefresh }) => {
    const { items, status, error, fetchProducts, deleteProduct } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteProduct(id);
                if (onDeleteSuccess) {
                    onDeleteSuccess();
                }
            } catch (err) {
                if (onError) {
                    onError(err.message || 'Failed to delete product');
                }
            }
        }
    };

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'pname', label: 'Product Name' },
        { key: 'price', label: 'Price' },
        { key: 'stock', label: 'Stock' }
    ];

    const actions = [
        {
            label: 'Edit',
            className: 'btn btn-sm btn-warning me-2',
            icon: 'bi bi-pencil',
            onClick: (item) => onEdit(item)
        },
        {
            label: 'Delete',
            className: 'btn btn-sm btn-danger',
            icon: 'bi bi-trash',
            onClick: (item) => handleDelete(item.id)
        }
    ];

    if (status === 'loading' && items.length === 0) {
        return <LoaderAnimation />;
    }

    if (error) {
        return (
            <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                <div>
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <strong>Error:</strong> {error}
                </div>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={onRefresh}
                >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div>
            <h4 className="mb-3">Product List (Zustand)</h4>
            {items.length === 0 ? (
                <p className="text-muted">No products found. Add one to get started!</p>
            ) : (
                <DataTable data={items} columns={columns} actions={actions} />
            )}
        </div>
    );
};

export default ZustandProductList;
