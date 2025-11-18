import { useCallback, useReducer } from 'react';
import ConfirmModal from '../common/ConfirmModal';
import DataTable from '../common/DataTable';
import FormComponent from './FormComponent';

const getNextId = (employees) =>
    employees.length ? employees[employees.length - 1].id + 1 : 1;

const createEmptyEmployee = (employees) => ({
    id: getNextId(employees),
    name: '',
    designation: '',
    salary: 0,
});

// Initial state
const initialState = {
    employees: [],
    employee: { id: 1, name: '', designation: '', salary: 0 },
    formDisabled: false,
    edit: false,
    showModal: false,
    deleteCandidate: null,
};

// Action types
const ACTIONS = {
    CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
    RESET_EMPLOYEE: 'RESET_EMPLOYEE',
    SAVE_EMPLOYEE: 'SAVE_EMPLOYEE',
    SELECT_EMPLOYEE: 'SELECT_EMPLOYEE',
    REMOVE_EMPLOYEE: 'REMOVE_EMPLOYEE',
    CONFIRM_DELETE: 'CONFIRM_DELETE',
    CANCEL_DELETE: 'CANCEL_DELETE',
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_EMPLOYEE: {
            const { name, value } = action.payload;
            const updated = { ...state.employee };
            if (name === 'id' || name === 'salary') {
                updated[name] = parseInt(value || '0', 10);
            } else {
                updated[name] = value;
            }
            return { ...state, employee: updated };
        }

        case ACTIONS.RESET_EMPLOYEE: {
            return {
                ...state,
                employee: createEmptyEmployee(state.employees),
                edit: false,
                formDisabled: false,
            };
        }

        case ACTIONS.SAVE_EMPLOYEE: {
            const data = action.payload;
            const normalized = {
                ...data,
                id: parseInt(data.id, 10),
                salary: parseInt(data.salary, 10) || 0,
            };

            let updatedEmployees;
            if (state.edit) {
                const idx = state.employees.findIndex(
                    (e) => e.id === normalized.id
                );
                if (idx !== -1) {
                    updatedEmployees = [...state.employees];
                    updatedEmployees[idx] = { ...normalized };
                } else {
                    updatedEmployees = [...state.employees, normalized];
                }
            } else {
                updatedEmployees = [...state.employees, normalized];
            }

            return {
                ...state,
                employees: updatedEmployees,
                employee: createEmptyEmployee(updatedEmployees),
                edit: false,
                formDisabled: false,
            };
        }

        case ACTIONS.SELECT_EMPLOYEE: {
            const { item, allowEdit } = action.payload;
            return {
                ...state,
                employee: { ...item },
                formDisabled: !allowEdit,
                edit: allowEdit,
            };
        }

        case ACTIONS.REMOVE_EMPLOYEE: {
            return {
                ...state,
                showModal: true,
                deleteCandidate: action.payload,
            };
        }

        case ACTIONS.CONFIRM_DELETE: {
            const updated = state.employees.filter(
                (e) => e.id !== state.deleteCandidate
            );
            return {
                ...state,
                employees: updated,
                employee: createEmptyEmployee(updated),
                edit: false,
                formDisabled: false,
                showModal: false,
                deleteCandidate: null,
            };
        }

        case ACTIONS.CANCEL_DELETE: {
            return {
                ...state,
                showModal: false,
                deleteCandidate: null,
                employee: createEmptyEmployee(state.employees),
                edit: false,
                formDisabled: false,
            };
        }

        default:
            return state;
    }
};

const CrudAssignmentReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { employees, employee, formDisabled, showModal } = state;

    const changeEmployee = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({ type: ACTIONS.CHANGE_EMPLOYEE, payload: { name, value } });
    }, []);

    const resetEmployee = useCallback(() => {
        dispatch({ type: ACTIONS.RESET_EMPLOYEE });
    }, []);

    const saveEmployee = useCallback((data) => {
        dispatch({ type: ACTIONS.SAVE_EMPLOYEE, payload: data });
    }, []);

    const selectEmployee = useCallback((item, allowEdit) => {
        dispatch({ type: ACTIONS.SELECT_EMPLOYEE, payload: { item, allowEdit } });
    }, []);

    const removeEmployee = useCallback((id) => {
        dispatch({ type: ACTIONS.REMOVE_EMPLOYEE, payload: id });
    }, []);

    const handleModalYes = useCallback(() => {
        dispatch({ type: ACTIONS.CONFIRM_DELETE });
    }, []);

    const handleModalNo = useCallback(() => {
        dispatch({ type: ACTIONS.CANCEL_DELETE });
    }, []);

    return (
        <div>
            <FormComponent
                employee={employee}
                changeEmployee={changeEmployee}
                saveEmployee={saveEmployee}
                resetEmployee={resetEmployee}
                disabled={formDisabled}
            />

            <hr />

            <DataTable
                items={employees}
                onSelect={selectEmployee}
                onDelete={removeEmployee}
            >
                <h5 className="text-primary text-uppercase font-weight-bold mb-3">
                    Employees Table - Reducer
                </h5>
            </DataTable>

            <ConfirmModal
                show={showModal}
                title="Delete Employee"
                message="Are you sure you want to delete?"
                handleYes={handleModalYes}
                handleNo={handleModalNo}
            />
        </div>
    );
};

export default CrudAssignmentReducer;
