Page({
  data: {
		triggered: false,
  },
  onReady() {
		const g = typeof ty === 'undefined' ? typeof wx === 'undefined' ? {} : wx : ty
    g.set = (v) => {
      this.setData({
        triggered: v
      })
		}

  },
  refresh() {
		console.log('********** 刷新了 **********')
    setTimeout(() => {
			console.log('********** update triggered *********')
			this.setData({
				triggered: false
			}, () => {
				if (typeof ty !== 'undefined') {
					console.log('*********** 我是涂鸦，我回不去了 *************')
				} else {
					console.log('*********** 我是微信，我能回去***********')
				}
			})
		}, 1000)
  }
})