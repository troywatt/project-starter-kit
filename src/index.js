import './index.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then( result => {
    const users = result.map( user => {
        return (
            `<tr>
                <td>
                    <a href="#" data-id="${ user.id }" class="delete-user">delete</a>
                </td>
                <td>${ user.id }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.email }</td>
            </tr>`
        );
    });

    document.getElementById( 'users' ).innerHTML = users.join('');


    const deleteLinks = document.getElementsByClassName('delete-user');

    Array.from( deleteLinks, link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const el = e.target;
            deleteUser( el.getAttribute( 'data-id' ) );
            const row = el.parentNode.parentNode;
            row.parentNode.removeChild( row );
        });
    });
});
