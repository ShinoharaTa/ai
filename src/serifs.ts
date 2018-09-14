// せりふ

export default {
	core: {
		setNameOk: name => `わかりました。これからは${name}とお呼びしますね！`,

		san: 'さん付けした方がいいですか？',

		yesOrNo: '「はい」か「いいえ」しかわからないんです...',

		hello: name => name ? `こんにちは、${name}さん♪` : `こんにちは♪`,

		helloNight: name => name ? `こんばんは、${name}さん♪` : `こんばんは♪`,

		goodMorning: (tension, name) => name ? `おはようございます、${name}さん！${tension}` : `おはようございます！${tension}`,

		goodNight: name => name ? `おやすみなさい、${name}さん！` : 'おやすみなさい！',

		okaeri: {
			love: name => name ? `おかえりなさい、${name}さん♪` : 'おかえりなさい♪',

			normal: name => name ? `おかえりなさい、${name}さん！` : 'おかえりなさい！',
		},

		itterassyai: {
			love: name => name ? `いってらっしゃい、${name}さん♪` : 'いってらっしゃい♪',

			normal: name => name ? `いってらっしゃい、${name}さん！` : 'いってらっしゃい！',
		},

		tooLong: 'あのね、ながいの...',

		invalidName: 'はつおんが　むずかしいの……',

		requireMoreLove: 'あのねあのね、もっと、なかよくなったら　いいですよ？',

		happyBirthday: name => name ? `お誕生日おめでとうございます、${name}🎉` : 'お誕生日おめでとうございます🎉',

		nadenade: {
			normal: '…！ びっくりしたぁ',

			love2: 'わわっ… くすぐったいよぉ',

			love3: 'ん… えへへ♪',

			hate1: '…っ！ やめて...',

			hate2: 'だめー！！さわらないで！！',

			hate3: '……近寄らないで',

			hate4: 'だめー、とまってー！キラーT細胞さんが来ちゃうよ？',
		},

		kawaii: {
			normal: 'ありがとー♪',

			love: 'うれしいの♪',

			hate: 'えへ……ありがとー///'
		},

		suki: {
			normal: 'えっ… ありがとー…♪',

			love: name => `わたしもその… ${name}のこと すき♪`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'ぎゅーっ♪',

			hate: 'やめてー！！離れて...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どうかな…？',

			normal: 'えぇ... それはちょっと...',

			hate: '………'
		},

		batou: {
			love: 'ののしられたいって... ちょっと引いちゃうかも',

			normal: '(じとー…)',

			hate: 'しこうかいろ とまってー！！'
		}
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... おぼえました)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} です！`
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: 'いいですよ～',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'あのねあのね、リバーシは工事中なの...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めました！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めました)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `やったー！${name}に勝ったよ♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝ってしまいました...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `あうぅ……${name}に負けちゃった……`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげました...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}となかよしです`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃいました……`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃいました... ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		arleadyStarted: 'えっ、いまもう始まっているよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージを見てほしいの',

		/**
		 * ゲーム開始
		 */
		started: '0~100の数字を当ててみてー！',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: 'あのねあのね、数字でお願いします！「やめる」でゲーム終了ですよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかりました～。ありがとう♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいよ`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `あのねあのね、${num}より大きいの！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいよ`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `あのね、${num}より小さいの！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `おおっ、せーかい🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどうかな？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `あのねあのね、今日の${name}の運勢を占うの` : 'あのねあのね、今日の運勢を占うの',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'タイマーすたーと！',

		invalid: 'うーん...？',

		tooLong: 'ながすぎだよ…',

		notify: (time, name) => name ? `${name}、${time}経ちましたよ！` : `${time}経ちましたよ！`
	},

	server: {
		cpu: 'サーバー負荷とまってー！！！'
	}
};
