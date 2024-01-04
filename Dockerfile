# 使用官方Node.js作为父镜像
FROM node:18

# 设置工作目录
WORKDIR /thinkts

# 将项目文件复制到工作目录
COPY . .

# 暴露5985端口
EXPOSE 5987

# 运行应用
CMD ["npm", "docker"]