import AsideItem from './AsideItem';
import MainItem from './MainItem';

const Body = () => {
    return (
        <main>
            <aside>
                <h2>Rubrik</h2>
                <div>
                    <AsideItem />
                    <AsideItem />
                    <AsideItem />
                </div>
            </aside>

            <section>
                <MainItem />
                <MainItem />
                <MainItem />
                <MainItem />
                <MainItem />
                <MainItem />
            </section>
        </main>
    );
}

export default Body;