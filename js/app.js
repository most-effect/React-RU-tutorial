var my_news = [
    {
        author: 'Саша Печкин',
        text: 'Хочется быть взрослым адекватным человеком',
        bigText: 'Хочется быть взрослым адекватным человеком, но с горочки на картоночке уиииии!'
    },
    {
        author: 'Просто Вася',
        text: 'Вся жизнь театр',
        bigText: 'Вся жизнь театр, а я просто упал со сцены'
    },
    {
        author: 'Гость',
        text: 'На работу хожу очень быстро',
        bigText: 'На работу хожу очень быстро, чтобы не передумать'
    }
];

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },

    getInitialState: function () {
        return {
            visible: false
        };
    },

    render: function () {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText;

        return (
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__text">{text}</p>
                <a href="#" className="news_readmore">Подробнее</a>
                <p className="news__big-text">{bigText}</p>
            </div>
        )

    }
})
var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
})

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={my_news} />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);