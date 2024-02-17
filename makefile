.DEFAULT_GOAL := help

up: ## Run rails container
	docker-compose up -d

down: ## Stop rails container
	docker-compose down
