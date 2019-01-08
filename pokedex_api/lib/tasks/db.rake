namespace :db do
  desc "destroy current db + recreate db from current migration files"
  task remake: :environment do
    # puts 'rake db:drop && rake db:create && rake db:migrate'
    Rake::Task["db:drop"].invoke
        Rake::Task["db:create"].invoke
            Rake::Task["db:migrate"].invoke
  end
end
