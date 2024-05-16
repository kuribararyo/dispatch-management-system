const Header = () => {
    return (
        <>
        <header className="bg-blue-700 text-white p-5 text-center text-xl">
            <div className="text-3xl font-bold leading-tight">配車業務管理システム</div>
        </header>
        <nav className="bg-blue-500 py-2.5 text-center">
            <ul className="list-none p-0 m-0">
                <li className="inline">
                    <a href="#dashboard" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">ダッシュボード</a>
                </li>
                <li className="inline">
                    <a href="#personnel" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">人員管理</a>
                </li>
                <li className="inline">
                    <a href="#vehicle" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">車両管理</a>
                </li>
                <li className="inline">
                    <a href="#dispatch" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">配車管理</a>
                </li>
                <li className="inline">
                    <a href="#reports" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">レポート</a>
                </li>
                <li className="inline">
                    <a href="setting.html" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">設定</a>
                </li>
                <li className="inline">
                    <a href="#support" className="text-white px-3.5 py-2.5 no-underline font-bold hover:bg-blue-800">ヘルプとサポート</a>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default Header;