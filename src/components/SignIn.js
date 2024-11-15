import React, { useState } from "react";

function SignIn() {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            JSON.stringify({
                email: form.email,
                password: form.password,
            })
        );
        return fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }

    return React.createElement(
        React.Fragment,
        null,
        !isOpen
            ? React.createElement(
                'button',
                { onClick: () => setIsOpen((previous) => !previous) },
                'Open Sign In'
            )
            : React.createElement(
                'form',
                {
                    className: `fixed ${isOpen ? "visible" : "hidden"} h-screen w-screen flexCenter relative z-[9999] transition-all duration-500 bg-gray-950/20`,
                    onSubmit: handleSubmit,
                },
                React.createElement(
                    'button',
                    {
                        className: 'w-full bg-transparent z-10 h-full absolute inset-0',
                        onClick: () => {
                            setIsOpen(false);
                        }
                    }
                ),
                React.createElement(
                    'div',
                    { className: 'border z-[9999] bg-white gap-20 p-10 flexCol w-[40rem]' },
                    React.createElement(
                        'input',
                        {
                            type: 'text',
                            name: 'email',
                            value: form.email,
                            placeholder: "Email",
                            onChange: (e) =>
                                setForm((previous) => ({
                                    ...previous,
                                    email: e.target.value,
                                }))
                        }
                    ),
                    React.createElement(
                        'input',
                        {
                            type: 'password',
                            name: 'password',
                            value: form.password,
                            placeholder: "Password",
                            onChange: (e) => {
                                setForm((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }));
                            }
                        }
                    ),
                    React.createElement(
                        'button',
                        {
                            type: 'submit',
                            className: 'border px-4 py-2',
                        },
                        'Submit'
                    )
                )
            )
    );
}

export default SignIn;