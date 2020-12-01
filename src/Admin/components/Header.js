import React from 'react';
import "../css/Header.css"
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="header-container">
            <h2 className="admin">Admim</h2>
            <Link className="link" to="/admin/vouchers">Vouchers</Link>
            <Link className="link" to="/admin/users">Users</Link>
        </header>
    )
}
