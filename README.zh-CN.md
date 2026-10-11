# DSH 侧边聊天

基于 [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) 1.0.2 的增强版，保留原作者的 Git 历史和 MIT 许可。适配 DeepSeek Harness `0.2.0-rc.2`，采用类似 Codex 的原生右侧栏聊天布局。

[English](README.md)

## 功能

- 右上角「打开侧边栏」→「新建侧边聊天」，与「新建终端」「浏览器」入口并列，使用 DSH 原生线条聊天加号图标。
- 聊天嵌入原生右侧标签页，空白状态居中提示，输入框位于底部，随侧栏宽度适配。
- 无需选中文字即可提问；上下文固定在打开时主会话最近已完成轮次，之后的主会话消息不会混入。主会话至少需完成一轮。
- 支持选中文字后提问、详细解释、批注，以及将侧边聊天结果添加到主对话。
- 独立选择模型和推理等级，支持流式回复、停止生成及原生 Markdown。

## 安装增强版

本仓库尚未发布到 npm。`@ahggg/dsh-side-chat@1.0.2` 是上游版本，直接从 npm 安装不会包含本仓库的增强功能。沿用包名可更新现有插件。

使用 Node.js 22.19+ 或 24+ 和 pnpm 11.7.0：

```powershell
git clone https://github.com/Denis-Tang/dsh-side-chat.git
cd dsh-side-chat
pnpm install --frozen-lockfile
pnpm build
npm pack --ignore-scripts
```

桌面端插件安装窗口填写生成的 `ahggg-dsh-side-chat-1.0.2.tgz` 的完整本地路径，安装后完整退出并重启 DSH。插件管理器也可安装本仓库 Git 地址；本仓库保留已构建的 `lib/`。

Web profile 使用匹配版本的 DSH CLI 安装本地包：

```powershell
dsh plugin --profile web add ./ahggg-dsh-side-chat-1.0.2.tgz
dsh web
```

更新后重启对应客户端。桌面与 Web profile 分开安装；请保留 DSH 的版本兼容检查。

## 使用与边界

输入框中 `Enter` 发送，`Shift+Enter` 换行。使用原生标签页关闭按钮，或在聊天输入框内按 `Esc`，结束临时讨论。回复完成后，「添加到主对话」把讨论作为引用放入主输入框；还需发送主会话草稿才会存入主会话历史。

侧边聊天只继承主会话的只读文本上下文，不创建新的 DSH Session，不执行工具或修改文件，不传入推理内容或附件字节。关闭、刷新、断开客户端或卸载插件后，临时讨论会丢弃；已加入主会话的引用单独保留。闲置记录 30 分钟后过期，同一客户端同时只能开启一个侧边聊天。模型调用产生正常 token 用量。

## 开发与验证

```powershell
pnpm check
pnpm clean-profile:verify
```

`pnpm check` 检查依赖、类型、lint、测试和打包。修改 `src/` 后执行 `pnpm build`，并提交更新后的 `lib/`；DSH 加载构建产物。

当前本地验证：136 项测试通过，类型检查、lint 和打包检查通过；实际聊天组件在 360、500、700 像素宽度下无横向溢出。新版已安装到 Windows DSH 桌面 profile，真实桌面加载效果仍需重启后验证。

## 许可证与上游

[MIT](LICENSE)。原始插件由 [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) 提供，本仓库维护原生侧栏布局、直接新建入口及相关优化。此为第三方插件。
