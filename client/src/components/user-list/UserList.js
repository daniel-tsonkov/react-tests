import { useState, useEffect } from "react";

import * as userService from '../../Services/userService'

import { UserAction } from "./UserListConstants";
import { UserDetails } from "./user-details/UserDetails";
import { UserItem } from "./user-item/UserItem";
import { UserEdit } from "./user-edit/UserEdit";
import { UserDelete } from "./user-delete/UserDelete";
import { UserCreate } from "./user-create/UserCreate";


export const UserList = () => {
    const [users, setusers] = useState([]);
    const [userAction, setUserAction] = useState({ use: null, action: null });

    useEffect(() => {
        userService.getAll()
            .then(users => setusers(users))
    }, []);

    const userActionClickHandler = (userId, actionType) => {
        userService.getOne(userId)
            .then(user => {
                setUserAction({
                    user,
                    action: actionType
                });
            });
    };

    const createUserOpenHandler = () => {
        setUserAction({
            action: UserAction.Add
        });
    };

    const closeHandler = () => {
        setUserAction({ use: null, action: null }); //затваря прозореца
    };

    const userCreateHandler = (userData) => {
        userService.create(userData)
            .then(user => {
                setusers(oldUsers => [...oldUsers, user]);
                closeHandler();
            });

        userService.edit(userData)
            .then(user => {
                setusers(oldUsers => [...oldUsers, user]);
                closeHandler();
            });
    };

    return (
        <>
            <div className="table-wrapper">

                {userAction.action === UserAction.Details &&
                    <UserDetails
                        user={userAction.user}
                        onClose={closeHandler}
                    />
                }

                {userAction.action === UserAction.Edit &&
                    <UserEdit
                        user={userAction.user}
                        onClose={closeHandler}
                    />
                }

                {userAction.action === UserAction.Delete &&
                    <UserDelete
                        user={userAction.user}
                        onClose={closeHandler}
                    />
                }

                {userAction.action === UserAction.Add &&
                    <UserCreate
                        onClose={closeHandler}
                        onUserCreate={userCreateHandler}
                    />
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas"
                                    // data-icon="arrow-down" className="svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    // className="svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    // className="svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    // className="svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon active-icon" aria-hidden="true" focusable="false" data-prefix="fas"
                                    // data-icon="arrow-down" className="svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Table row component --> */}
                        {users.map(user =>
                            <tr key={user._id}>
                                <UserItem
                                    user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <button className="btn-add btn" onClick={createUserOpenHandler}>Add new user</button>
        </>
    );

}