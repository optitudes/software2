import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function RoleInformation({
    className = '',
}) {

    const role = usePage().props.auth.user.role;

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                   Información del rol 
                </h2>
            </header>

            <form  className="mt-6 space-y-6">
                <div>
                    <InputLabel value="Nombre" />

                    <TextInput
                        className="mt-1 block w-full"
                        value={role.rol}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel  value="Descripción" />

                    <TextInput
                        className="mt-1 block w-full"
                        value={role.description}
                        disabled 
                    />
                </div>
                <div>
                    <InputLabel  value="Código del rol" />

                    <TextInput
                        className="mt-1 block w-full"
                        value={role.code}
                        disabled 
                    />
                </div>
            </form>
        </section>
    );
}
