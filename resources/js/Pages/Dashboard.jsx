import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard() {

    const role = usePage().props.auth.user.role;
    const orders = usePage().props.auth.user.orders;
    useEffect(()=>{console.log(role);console.log(orders)},[]);

    // Función para formatear la fecha en el formato dd/mm/aaaa hh:mm
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Panel principal
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                        { role.code == "3001" && (
                            <div className="container mx-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold">Lista de Órdenes</h2>
                                        <Link
                                            href={route('order.create')}
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Agregar
                                        </Link>
                                    </div>                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-200">
                                        <th className="px-6 py-3 border-b text-left">Cantidad</th>
                                        <th className="px-6 py-3 border-b text-left">Estado</th>
                                        <th className="px-6 py-3 border-b text-left">Fecha creación</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-100">
                                            <td className="px-6 py-4 border-b">{order.quantity}</td>
                                            <td className="px-6 py-4 border-b">{order.state}</td>
                                            <td className="px-6 py-4 border-b">{formatDate(order.created_at)}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        )}


                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
