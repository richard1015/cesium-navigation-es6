const fs = require("fs-extra");
class CopyDirWebpackPlugin {
    constructor(options) {
        if (!Array.isArray(options)) {
            options = [options];
        }
        this.options = options;
    }
    apply(compiler) {
        const opts = this.options;
        compiler.hooks.done.tap(
            'Copy Plugin',
            (
                stats /* stats is passed as an argument when done hook is tapped.  */
            ) => {
                opts.forEach(opt => {
                    fs.copy(
                        opt.from,
                        opt.to
                    ).then(res => {
                        console.log(`完成 copy ${opt.from} to ${opt.to}`);
                    })
                })
            }
        );
    }
}
module.exports = CopyDirWebpackPlugin;

